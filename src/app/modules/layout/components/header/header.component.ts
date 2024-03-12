import { Component, inject } from '@angular/core';
import { LayoutService } from '../../../../core/services/layout-service/layout.service';
import LayoutUtil from '../../../../core/utilities/layout.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public layoutService = inject(LayoutService);

  layoutUtil = LayoutUtil;
}
