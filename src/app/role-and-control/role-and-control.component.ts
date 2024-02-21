import { Component } from '@angular/core';

@Component({
  selector: 'app-role-and-control',
  templateUrl: './role-and-control.component.html',
  styleUrls: ['./role-and-control.component.css']
})
export class RoleAndControlComponent {
  dataSource = [
    { caseCategory: 'NRI', caseSubCategory: 'Address Update', fieldName: 'Address', accessType: 'No Access', maskingPreview: 'xxxx xxxx xxxx...xxxx' },
    // Add more data rows here if needed
  ];

  displayedColumns: string[] = ['caseCategory', 'caseSubCategory', 'fieldName', 'accessType', 'maskingPreview', 'actions'];
}
