package App.Sport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SportServiceImpl implements SportService {

    @Autowired
    private SportRepository repository;

    @Override
    public Velo addVelo(Velo velo) {
        return repository.save(velo);
    }

    @Override
    public Cap addCap(Cap cap) {
        return repository.save(cap);
    }

    @Override
    public List<Sport> getAllSport() {
        return repository.findAll();
    }

    @Override
    public Sport getSportById(String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Sport> getAllSportByUser(String userId) {

        return repository.findAllSport(userId);
    }

    @Override
    public void deleteSportById(String id) {
        try {
            repository.deleteById(id);
        } catch (DataAccessException ex) {
            throw new RuntimeException(ex.getMessage());
        }
    }

    @Override
    public void updateSport(Sport sport) {
        // On vérifie si l'utilisateur donné existe ou non
        Sport sportDB = repository.findById(sport.getId()).orElseThrow();
        // Si l'user existe alors on le maj
        repository.save(sport);
    }
}
