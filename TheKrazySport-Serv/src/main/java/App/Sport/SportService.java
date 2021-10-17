package App.Sport;

import java.util.List;

public interface SportService {

    Velo addVelo(Velo velo);
    Cap addCap(Cap cap);
    List<Sport> getAllSport();
    Sport getSportById(String id);
    List<Sport> getAllSportByUser(String userId);
    void deleteSportById(String id);
    void updateSport(Sport sport);
}
