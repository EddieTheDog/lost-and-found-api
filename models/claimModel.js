let claims = [];

export const addClaim = async ({ name, email }) => {
  const id = claims.length + 1;
  const newClaim = { id, name, email, status: "open", items: [] };
  claims.push(newClaim);
  return id;
};

export const findClaimById = async (id) => {
  return claims.find((c) => c.id == id);
};

export const getClaims = async () => claims;
