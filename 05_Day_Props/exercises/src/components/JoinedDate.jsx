const dateFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "America/Manaus",
};

const dateIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="#0af1f5"
    viewBox="0 0 256 256"
    style={{ verticalAlign: "middle" }}
  >
    <rect width="256" height="256" fill="none"></rect>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke="#0af1f5"
      stroke-width="12"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></circle>
    <polyline
      points="128 72 128 128 184 128"
      fill="none"
      stroke="#0af1f5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="12"
    ></polyline>
  </svg>
);

export function JoinedDate(props) {
  return (
    <small>
      {dateIcon} Joined on{" "}
      {new Intl.DateTimeFormat("en-US", dateFormatOptions).format(
        new Date(props.date)
      )}
    </small>
  );
}
