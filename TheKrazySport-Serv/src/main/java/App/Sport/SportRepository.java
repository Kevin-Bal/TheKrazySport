package App.Sport;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SportRepository extends MongoRepository<Sport, String> {

    @Query("{ 'userId' : ?0 }")
    List<Sport> findAllSport(String userId);
}
