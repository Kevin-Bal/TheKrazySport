package TheKrazySport.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repository;

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(String userId) {
        return repository.findById(userId).get();
    }

    @Override
    public void updateUser(User user) {
        // On vérifie si l'utilisateur donné existe ou non
        User userDB = repository.findById(user.getId()).orElseThrow();
        // Si l'user existe alors on le maj
        repository.save(user);
    }

    @Override
    public void deleteUserById(String userId) {
        try {
            repository.deleteById(userId);
        } catch (DataAccessException ex) {
            throw new RuntimeException(ex.getMessage());
        }
    }
}
