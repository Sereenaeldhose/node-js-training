var library = [
  {
    title: "The India Story",
    author: "Bimal Jalal",
    alreadyread: false,
  },
  {
    title: "Grand Ma's bag of Stories",
    author: "Sudgha Murthy",
    alreadyread: false,
  },
  {
    title: "Two States",
    author: "Chethan Bhagat",
    alreadyread: true,
  },
  {
    title: "Lal Salam",
    author: "Smriti Irani",
    alreadyread: true,
  },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    alreadyread: false,
  },
];

if (Array.isArray(library)) {
  library.forEach((item) => {
    if (item.alreadyread) {
      console.log(`You already read "${item.title}" by "${item.author}."`);
      return;
    }
    console.log(
      `You still need to read "${item.title}'s" by "${item.author}."`
    );
  });
}
