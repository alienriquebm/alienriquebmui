import { useEffect, useState } from 'react';

import cn from '../../helpers/cn';
import emptyAvatarUrl from './empty_avatar.svg';
import { AvatarSize, IAvatar } from './avatar.interfaces';

export function Avatar({ url, dataCy, className, size = AvatarSize.Medium }: IAvatar) {
  const [initialUrl, setUrl] = useState(emptyAvatarUrl);
  const classes = cn(size, 'rounded-full flex-shrink-0 bg-slate-200', className);

  useEffect(() => {
    if (url) {
      setUrl(url);
    }
  }, [url]);

  const handleError = () => setUrl(emptyAvatarUrl);

  return (
    <img
      src={initialUrl}
      className={classes}
      data-cy={dataCy}
      alt="Avatar"
      decoding="async"
      loading="lazy"
      onError={handleError}
    />
  );
}
