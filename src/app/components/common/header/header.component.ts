import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    loggedIn = false;
    isTeacher = false;
    constructor(private router: Router, private authService: AuthService) {
        
     }

    ngOnInit(): void {
        console.log('currentUser')
        const currentUser = this.authService.getCurrentuUser()
        if(currentUser != null){
            currentUser.subscribe(user => {
                if(user == 'null' || user == null){
                    this.loggedIn = false
                } else {
                    this.loggedIn = true
                }
            })
        }
        
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    classApplied3 = false;
    toggleClass3() {
        this.classApplied3 = !this.classApplied3;
    }

    logout(){
        this.authService.logout()
        this.loggedIn = false
        this.router.navigate(["/"])
    }

}