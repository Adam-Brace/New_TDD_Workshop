// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

export class Customer {
	name: string;
	rentals: Array<Movie>;

	constructor(name: string) {
		this.name = name;
		this.rentals = [];
	}

	rentMovie(movie: Movie) {
		if (movie.inStock) {
			this.rentals.push(movie);
			movie.incrementDaysRented();
		}
	}

	calculateRentalFees(): number {
		let cost = 0;
		this.rentals.forEach((rental) => {
			cost += rental.daysRented;
		});

		return cost;
	}
}

export class Movie {
	title: string;
	inStock: boolean;
	daysRented: number;

	constructor(title: string) {
		this.title = title;
		this.inStock = true;
		this.daysRented = 0;

		Movie.inventory.push(this);
	}

	rentMovie() {
		this.inStock = false;
	}

	incrementDaysRented() {
		this.daysRented++;
	}

	static inventory = [];
}
