import { useEffect, useState } from "react";
import { getFromLocalStorage } from '../utils/util.js';
import { Container } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import Alert from 'react-bootstrap/Alert';


function ProfilePage() {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const savedFavorites = getFromLocalStorage("favorites") || [];
        console.log(savedFavorites)
        setFavorites(savedFavorites)
      }, [])
      return (<>
      <Container>
        <Alert variant="info">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
              This is your profile page!
            </p>
          <hr />
            <p className="mb-0">
              Be sure to update your album status on the home page!
            </p>
        </Alert>
        <Toast value="top-0 start-50 translate-middle-x">
          <Toast.Header>
            <strong className="me-auto">I am Currently Listening to ... </strong>
            <small>Recents</small>
          </Toast.Header>
          <Toast.Body>{favorites.map((f) => <p>{f.name}</p>)}</Toast.Body>
        </Toast>
      </Container>
     </>)
}

export default ProfilePage;