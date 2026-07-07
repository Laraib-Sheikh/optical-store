/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "framer-motion" {
  import * as React from "react";
  // Lightweight local shim to avoid strict type mismatches with installed
  // framer-motion/React versions. This makes `motion` effectively `any`
  // for JSX usage so props like `className` and `type` are accepted.
  const motion: any;
  const AnimatePresence: any;
  type Variants = any;
  export { motion, AnimatePresence, Variants };
  export default motion;
}
