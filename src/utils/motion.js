// Variants

export const modalCardVariants = {
  open: { y: 0, transition: { duration: 3.2, type: "spring", stiffness: 130 } },
  closed: { y: -1000 },
};

export const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.2, type: "spring" },
  },
  tap: {
    borderBottomWidth: "0px",
  },
};
