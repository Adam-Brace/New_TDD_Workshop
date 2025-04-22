import { Customer, Movie } from "./MovieStore";

const movie1 = new Movie("Top Gun");
const movie2 = new Movie("Titanic");
const movie3 = new Movie("Spider Man");
const user = new Customer("Bob");

describe("Movie Store", () => {
	test("The application can add movies to an inventory array", () => {
		expect(Movie.inventory).toContain(movie1);
	});
	test("Track if a movie is rented out or in stock", () => {
		movie1.rentMovie();
		expect(movie1.inStock).toBe(false);
		expect(movie2.inStock).toBe(true);
	});

	test("calculate a customer's total cost for the # of rentals * # of days.", () => {
		expect(user.calculateRentalFees()).toBe(0);
		user.rentMovie(movie2);
		expect(user.calculateRentalFees()).toBe(1);
	});
	test("A customer can only rent a movie if it is in stock.", () => {
		user.rentMovie(movie2);
		expect(user.rentals.length).toBe(2);
		user.rentMovie(movie3);
		expect(user.rentals.length).toBe(3);
	});
});
