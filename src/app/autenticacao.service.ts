import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Usuario } from "./usuario.module";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

@Injectable()
export class Autenticacao {

    constructor(private router: Router){}

    public token_id!: string;




    //Cadastro   
    public cadastrarUsuario(usuario: Usuario): Promise<any> {

        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, usuario.email, usuario.senha)
            .then((res) => {

                let user: Object = {
                    email: usuario.email,
                    nome_completo: usuario.nome_completo,
                    nome_usuario: usuario.nome_usuario
                }

                const db = getDatabase();
                set(ref(db, `users/ ${btoa(usuario.email)}`), user);

               

            })
            .catch((error) => {
                console.log('Falha no cadastro: ', error)
            });
    }





//Login
    public autenticar(email: string, senha: string): void {
        console.log("Autenticando....")
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, senha)
            .then((res: any) => {
                auth.currentUser?.getIdToken()
                .then((idToken) => {
                    this.token_id = idToken
                    console.log(this.token_id)
                    this.router.navigate(['/home'])
                })
            })
            .catch((error: any) => {
                console.log(error.code)
                console.log(error.message)
            });

    }

}