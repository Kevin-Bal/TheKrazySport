package App.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;
import java.util.Base64;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    /**
     * Méthode post pour ajouter un user dans la table
     * @param user
     * @return
     */
    @PostMapping
    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    public User addEmployee(@RequestBody User user) {
        return userService.addUser(user);
    }

    // Fetch all user records
    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    // Fetch single user
    @GetMapping("/{id}")
    public User getUserById(@PathVariable("id") String userId){
        return userService.getUserById(userId);
    }

    // Update user record
    @PutMapping("/updateuser")
    public ResponseEntity<String> updateUser(@RequestBody User user) {
        try {
            userService.updateUser(user);
            return new ResponseEntity<String>(HttpStatus.OK);
        }catch(NoSuchElementException ex){
            // log the error message
            System.out.println(ex.getMessage());
            return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete user record
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable String id){
        try {
            userService.deleteUserById(id);
            return new ResponseEntity<String>(HttpStatus.OK);
        }catch(RuntimeException ex){
            // log the error message
            System.out.println(ex.getMessage());
            return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
        }
    }

    @CrossOrigin
    @RequestMapping("/login")
    public boolean login(@RequestBody User user) {
        System.out.println("Log");
        return user.getEmail().equals("email") && user.getPassword().equals("password");
    }

    @RequestMapping("/user")
    public Principal user(HttpServletRequest request) {
        String authToken = request.getHeader("Authorization")
                .substring("Basic".length()).trim();
        return () ->  new String(Base64.getDecoder()
                .decode(authToken)).split(":")[0];
    }

}
