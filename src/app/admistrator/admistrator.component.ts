import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { AdminsService } from '../services/admins.service';

@Component({
  selector: 'app-admistrator',
  templateUrl: './admistrator.component.html',
  styleUrls: ['./admistrator.component.css']
})
export class AdmistratorComponent implements OnInit {

  adminactiveForm!: FormGroup;
  adminOnDuty!: any;
  adminactiveId!: number;

  btnSave = 'Save';
  constructor(private formBuilder: FormBuilder, private adminactiveService: AdminsService) { }

  ngOnInit(): void {
    this.adminactiveForm = this.formBuilder.group({
      name: [''],
      email: [''],
      office: [''],
      mobile: [''],
      stars: ['']
    });
    this.getadminOnDuty();
  }

  onSubmit() {
    if (this.adminactiveId && this.adminactiveId > 0) {
      const adminactiveDataForUpdate = {
        id: this.adminactiveId,
        name: this.adminactiveForm.controls.name.value,
        email: this.adminactiveForm.controls.email.value,
        createdat: new Date().getTime(),
        office: this.adminactiveForm.controls.office.value,
        mobile: this.adminactiveForm.controls.mobile.value,
        stars: this.adminactiveForm.controls.stars.value
      };
      this.adminactiveService.updateadminactive(adminactiveDataForUpdate).subscribe(res => {
        this.getadminOnDuty();
        this.adminactiveForm.reset();
        this.btnSave = 'Save';
        this.adminactiveId = 0;
      });
    } else {
      this.adminactiveService.saveadminactive(this.adminactiveForm.value).subscribe(res => {
        this.getadminOnDuty();
        this.adminactiveForm.reset();
      });
    }
  }

  getadminOnDuty() {
    this.adminactiveService.getAlladminactives().subscribe(data => this.adminOnDuty = data);
  }

  edit(id: any) {
    this.adminactiveService.getadminactiveById(id).subscribe(data => {
      this.adminactiveForm.patchValue(data);
      this.adminactiveId = id;
      this.btnSave = 'Update';
    });
  }

  delete(id: any) {
    this.adminactiveService.deleteadminactive(id).subscribe(res => this.getadminOnDuty());
  }

}
