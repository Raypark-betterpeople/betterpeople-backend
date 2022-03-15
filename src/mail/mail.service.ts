import { Inject, Injectable } from '@nestjs/common';
import { CONFIG_OPTIONS } from 'src/common/common.constant';
import { MailModuleOptions } from './mail.interfaces';
import got from 'got';
import * as FormData from 'form-data';

@Injectable()
export class MailService {
  constructor(
    @Inject(CONFIG_OPTIONS) private readonly options: MailModuleOptions,
  ) {}
  private async sendEmail(
    subject: string,
    toEmail: string,
    template: string,
    code: string,
    username: string,
  ) {
    const form = new FormData();
    form.append('from', `Betterpeople Inc. <contact@${this.options.domain}>`);
    form.append('to', toEmail);
    form.append('subject', subject);
    form.append('template', template);
    form.append('v:code', code);
    form.append('v:username', username);
    try {
      await got(
        `https://api.mailgun.net/v3/${this.options.domain}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Basic ${Buffer.from(
              `api:${this.options.apiKey}`,
            ).toString('base64')}`,
          },
          body: form,
        },
      );
    } catch (error) {
      console.log(error);
    }
  }

  sendVerificationEmail(toEmail:string, code:string, username: string) {
    this.sendEmail('이메일을 인증해주세요! - Better people Inc.', toEmail, 'betterpeople', code, username)
  }
}
