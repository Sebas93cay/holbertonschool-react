export const NotificationItem = ({ type, html, value }) => {
  return (
    <>
      {html ? (
        <li
          data-notification-type={type}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      ) : (
        <li data-notification-type={type}>{value}</li>
      )}
    </>
  );
};
