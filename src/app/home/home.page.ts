import { Component } from '@angular/core';
import { AppCenterAnalytics } from '@awesome-cordova-plugins/app-center-analytics/ngx';
import { AppCenterCrashes } from '@awesome-cordova-plugins/app-center-crashes/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private analytics: AppCenterAnalytics, private crashes: AppCenterCrashes) {}

  async trackCustomEvent(): Promise<void> {
    try {
      await this.enableAnalytics();
      await this.analytics.trackEvent('JamesonFromIonic', {});
      console.log('Analytics sent');
    } catch (e) {
      console.log('Failed to track custom event', e);
    }
  }

  testCrash(): void {
    this.crashes.generateTestCrash();
  }

  private async enableAnalytics(): Promise<boolean> {
    try {
      await this.analytics.setEnabled(true);
      const isEnabled = await this.analytics.isEnabled();
      console.log(`Analytics ${isEnabled ? 'enabled' : 'disabled'}`);
      return isEnabled;
    } catch (e) {
      console.log('Failed to enable analytics', e);
      return Promise.reject(e);
    }
  }

}
