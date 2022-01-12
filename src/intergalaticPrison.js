export function intergalaticPrison(prisioners_ids) {
  if (prisioners_ids.length === 0) return [];

  const maxNumber = Number(prisioners_ids.sort().slice(-1)[0]);

  if (maxNumber === prisioners_ids.length) return [];

  const missingIds = Array.from({ length: maxNumber }).reduce((acc, _, index) => {
    // const prisionerId = `0000${index + 1}`.slice(-4);
    const prisionerId = `${index + 1}`.padStart(4, "0");
    if (!prisioners_ids.includes(prisionerId)) acc.push(prisionerId);
    return acc;
  }, []);

  return missingIds;
}
