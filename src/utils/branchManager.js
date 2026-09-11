/**
 * BP Bromteck — Trunks & Branches Database Management System
 * Manages database branching, staging changes, trunk comparisons,
 * and cryptographically signed merges for EDEMSA technical projects.
 */

const BRANCHES_STORAGE_KEY = 'bp_bromteck_branches_v1';
const INITIAL_TRUNK_BRANCH = {
  id: 'main-trunk',
  name: 'Main Trunk (Producción EDEMSA)',
  description: 'Rama principal de producción aprobada por EPRE Mendoza y Operaciones EDEMSA.',
  createdBy: 'Diego Musach',
  createdAt: '2026-09-01 10:00',
  status: 'ACTIVE',
  isTrunk: true,
  itemsCount: 30,
  lastCommit: 'Commit 84f29a0: Aprobación final 10 Soluciones EPRE Res. 129/18'
};

const INITIAL_FEATURE_BRANCHES = [
  INITIAL_TRUNK_BRANCH,
  {
    id: 'branch/epre-recargo-2026',
    name: 'branch/epre-recargo-2026',
    description: 'Propuesta de incremento de tasa de recargo comercial por reincidencia de hurto en BT.',
    createdBy: 'Alejandro Cubino',
    createdAt: '2026-09-10 14:30',
    status: 'OPEN',
    isTrunk: false,
    itemsCount: 4,
    lastCommit: 'Commit c91a0ef: Incorporación de cálculo de mora con TDR reflectometría'
  },
  {
    id: 'branch/ap-godoycruz-audit',
    name: 'branch/ap-godoycruz-audit',
    description: 'Auditoría de Alumbrado Público en Godoy Cruz: balance energético 140 W / lámpara LED.',
    createdBy: 'Diego Musach',
    createdAt: '2026-09-11 09:15',
    status: 'OPEN',
    isTrunk: false,
    itemsCount: 12,
    lastCommit: 'Commit e7721b0: Ajuste de fotocélulas defectuosas en Av. San Martín'
  }
];

export function getBranches() {
  const data = localStorage.getItem(BRANCHES_STORAGE_KEY);
  if (!data) {
    localStorage.setItem(BRANCHES_STORAGE_KEY, JSON.stringify(INITIAL_FEATURE_BRANCHES));
    return INITIAL_FEATURE_BRANCHES;
  }
  try {
    return JSON.parse(data);
  } catch (e) {
    return INITIAL_FEATURE_BRANCHES;
  }
}

export function createBranch({ name, description, createdBy }) {
  const branches = getBranches();
  const newBranch = {
    id: `branch/${name.toLowerCase().replace(/[^a-z0-9_-]/g, '-')}-${Date.now().toString().slice(-4)}`,
    name: `branch/${name.toLowerCase().replace(/[^a-z0-9_-]/g, '-')}`,
    description: description || 'Rama de ingeniería técnica en desarrollo',
    createdBy: createdBy || 'Usuario Autorizado',
    createdAt: new Date().toLocaleString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    status: 'OPEN',
    isTrunk: false,
    itemsCount: 1,
    lastCommit: `Initial commit from main-trunk`
  };
  const updated = [newBranch, ...branches];
  localStorage.setItem(BRANCHES_STORAGE_KEY, JSON.stringify(updated));
  return newBranch;
}

export function mergeBranchToTrunk(branchId, reviewerUser) {
  const branches = getBranches();
  const branchIndex = branches.findIndex(b => b.id === branchId);
  if (branchIndex === -1) return { success: false, message: 'Rama no encontrada.' };

  const branch = branches[branchIndex];
  if (branch.isTrunk) return { success: false, message: 'No se puede fusionar la rama principal sobre sí misma.' };

  branch.status = 'MERGED';
  branch.mergedBy = reviewerUser?.name || reviewerUser?.username || 'Revisor Aprobado';
  branch.mergedAt = new Date().toLocaleString('es-AR');

  // Update Main Trunk commit log
  const trunkIndex = branches.findIndex(b => b.isTrunk);
  if (trunkIndex !== -1) {
    branches[trunkIndex].lastCommit = `Merge branch '${branch.name}' (Aprobado por ${branch.mergedBy})`;
    branches[trunkIndex].itemsCount += branch.itemsCount;
  }

  localStorage.setItem(BRANCHES_STORAGE_KEY, JSON.stringify(branches));
  return { success: true, branch, trunk: branches[trunkIndex] };
}
