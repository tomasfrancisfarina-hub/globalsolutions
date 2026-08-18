/**
 * Client-side double-submit guard verification (logic mirror).
 */
async function simulateSubmit(guard) {
  if (guard.isSubmittingRef.current || guard.isSubmitting) return false;
  guard.isSubmittingRef.current = true;
  guard.setSubmitting(true);
  try {
    await guard.fetchFn();
    return true;
  } finally {
    guard.isSubmittingRef.current = false;
    guard.setSubmitting(false);
  }
}

async function main() {
  let isSubmitting = false;
  const isSubmittingRef = { current: false };
  let fetchCount = 0;

  const fetchFn = async () => {
    fetchCount += 1;
    await new Promise((r) => setTimeout(r, 50));
  };

  const makeGuard = () => ({
    isSubmittingRef,
    get isSubmitting() {
      return isSubmitting;
    },
    setSubmitting: (v) => {
      isSubmitting = v;
    },
    fetchFn,
  });

  const p1 = simulateSubmit(makeGuard());
  const p2 = simulateSubmit(makeGuard());
  const [r1, r2] = await Promise.all([p1, p2]);

  console.log({ r1, r2, fetchCount });
  if (fetchCount !== 1) throw new Error(`Expected 1 fetch, got ${fetchCount}`);
  if (r1 !== true || r2 !== false) {
    throw new Error("Expected first submit to run, second to be blocked");
  }

  const r3 = await simulateSubmit(makeGuard());
  if (r3 !== true || fetchCount !== 2) {
    throw new Error("Expected a new submit after unlock");
  }

  console.log("DOUBLE_SUBMIT_GUARD_PASSED");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
