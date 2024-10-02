import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  // standalone: true,
  // imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // Method to get all users
  getUsers(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    }, error => {
      console.error('Error fetching users', error);
    });
  }

}
