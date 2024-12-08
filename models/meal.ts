class Meal {
  constructor(
    private id: string,
    private categoryIds: string[],
    private title: string,
    private affordability: "affordable" | "pricey" | "luxurious",
    private complexity: "simple" | "challenging" | "hard",
    private imageUrl: string,
    private duration: number,
    private ingredients: string[],
    private steps: string[],
    private isGlutenFree: boolean,
    private isVegan: boolean,
    private isVegetarian: boolean,
    private isLactoseFree: boolean,
  ) {}
}

export default Meal;
