package App.Sport;

import App.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
@RequestMapping("/sport")
public class SportController {

    @Autowired
    private SportService sportService;

    private final SportRepository sportRepository;

    public SportController(SportRepository sportRepository) {
        this.sportRepository = sportRepository;
    }

    // Insert velo
    @PostMapping
    @RequestMapping("/velo")
    @ResponseStatus(HttpStatus.CREATED)
    public Velo addVelo(@RequestBody Velo velo){
        return sportService.addVelo(velo);
    }

    // Insert cap
    @PostMapping
    @RequestMapping("/cap")
    @ResponseStatus(HttpStatus.CREATED)
    public Cap addCap(@RequestBody Cap cap){
        return sportService.addCap(cap);
    }

    // Fetch All sport records
    @GetMapping
    public List<Sport> getAllSport(){
        return sportService.getAllSport();
    }

    // Fetch All Sport by user
    @GetMapping("/user/{id}")
    public List<Sport> getAllSportByUser(@PathVariable("id") String idUser){
        return sportService.getAllSportByUser(idUser);
    }

    // Get sport by id
    @GetMapping("/{id}")
    public Sport getSportById(@PathVariable("id") String id){
        return sportService.getSportById(id);
    }

    // Update Sport record
    @PutMapping("/updatesport")
    public ResponseEntity<String> updateSport(@RequestBody Sport sport) {
        try {
            sportService.updateSport(sport);
            return new ResponseEntity<String>(HttpStatus.OK);
        }catch(NoSuchElementException ex){
            // log the error message
            System.out.println(ex.getMessage());
            return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
        }
    }

    // Delete sport record
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSport(@PathVariable String id){
        try {
            sportService.deleteSportById(id);
            return new ResponseEntity<String>(HttpStatus.OK);
        }catch(RuntimeException ex){
            // log the error message
            System.out.println(ex.getMessage());
            return new ResponseEntity<String>(HttpStatus.NOT_FOUND);
        }
    }
}
