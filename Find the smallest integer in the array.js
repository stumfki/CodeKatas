class SmallestIntegerFinder {
    findSmallestInt(args) {
           const numbers = args.sort((a,b) => a-b);
      return numbers[0];
      
    }
  }