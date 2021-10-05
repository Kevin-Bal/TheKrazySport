package TheKrazySport.User;

import java.util.List;

public interface UserService {

    User addUser(User user);

    List<User> getAllUsers();

    User getUserById(String userId);

    void updateUser(User user);

    void deleteUserById(String userId);
}
