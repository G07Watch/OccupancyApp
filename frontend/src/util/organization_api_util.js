import axios from 'axios';

export const fetchOrg = orgId => axios
.get(`/api/org/${orgId}`);