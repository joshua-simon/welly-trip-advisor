import {firebase} from '../firebaseConfig'

export async function getVenues() {
    const response = await firebase
    .firestore()
    .collection('venues')
    .get()
    return response.docs
        .map((venue) => ({...venue.data()}))
}

