import java.util.*;

public class RecommendationEngine {

    public static void getMovies(String genre){

        ArrayList<Movie> movies=new ArrayList<>();

        movies.add(new Movie("Interstellar","Sci-Fi",8.7));
        movies.add(new Movie("Inception","Sci-Fi",8.8));
        movies.add(new Movie("John Wick","Action",7.9));

        for(Movie m:movies){
            if(m.genre.equalsIgnoreCase(genre)){
                System.out.println(m.title+" "+m.rating);
            }
        }
    }
}