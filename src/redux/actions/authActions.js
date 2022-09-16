import { LOGIN_WITH_GOOGLE_FAIL, LOGIN_WITH_GOOGLE_REQUEST, LOGIN_WITH_GOOGLE_SUCCESS, LOGOUT } from "../constants/authConstants"

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import db from "../../config"
import { doc, setDoc } from "firebase/firestore"

export const loginWithGoogleAction = () => async dispatch => {
    try {
        dispatch({ type: LOGIN_WITH_GOOGLE_REQUEST })
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        // console.log(auth);
        const { user: { uid, email, displayName, photoURL } } = await signInWithPopup(auth, provider)
        const docRef = doc(db, "users", uid)
        const user = {
            email,
            name: displayName,
            avatar: photoURL
        }
        localStorage.setItem("localLogin", JSON.stringify(user))
        await setDoc(docRef, user)
        console.log(user);
        dispatch({ type: LOGIN_WITH_GOOGLE_SUCCESS, payload: user })
    } catch (error) {
        dispatch({ type: LOGIN_WITH_GOOGLE_FAIL, payload: error })
    }
}
export const logOutAction = () => async dispatch => {
    localStorage.removeItem("localLogin")
    dispatch({ type: LOGOUT })
}
