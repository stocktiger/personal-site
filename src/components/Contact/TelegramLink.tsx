import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TelegramLink() {
  return (
    <div className="contact-email-container">
      <a
        href="https://t.me/drmichaelsuarez"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-email-link"
      >
        <FontAwesomeIcon
          icon={faTelegram}
          style={{ marginRight: '0.5rem', fontSize: '1.25em' }}
        />
        <span className="contact-email-prefix">@drmichaelsuarez</span>
      </a>
    </div>
  );
}
