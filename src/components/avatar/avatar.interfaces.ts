export enum AvatarSize {
  Medium = 'size-10',
  Large = 'size-14',
}

export interface IAvatar {
  url?: string;
  size?: AvatarSize;
  dataCy?: string;
  className?: HTMLElement['className'];
}
