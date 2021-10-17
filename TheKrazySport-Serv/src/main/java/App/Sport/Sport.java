package App.Sport;

import org.springframework.data.annotation.Id;

import java.util.Date;

public abstract class Sport {

    @Id
    public String id;
    public float distance;
    public Date debut;
    public Date fin;
    public String duree;
    public float vitesse;
    public String userId;
    public TypeSport type;


    public Sport(float distance, Date debut, Date fin, String duree, float vitesse, String userId) {
        this.distance = distance;
        this.debut = debut;
        this.fin = fin;
        this.duree = duree;
        this.vitesse = vitesse;
        this.userId = userId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public float getDistance() {
        return distance;
    }

    public void setDistance(float distance) {
        this.distance = distance;
    }

    public Date getDebut() {
        return debut;
    }

    public void setDebut(Date debut) {
        this.debut = debut;
    }

    public Date getFin() {
        return fin;
    }

    public void setFin(Date fin) {
        this.fin = fin;
    }

    public float getVitesse() {
        return vitesse;
    }

    public void setVitesse(float vitesse) {
        this.vitesse = vitesse;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public TypeSport getType() {
        return type;
    }

    public void setType(TypeSport type) {
        this.type = type;
    }
}
