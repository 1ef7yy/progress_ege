const set = (subject, pts) => {
  storage = window.localStorage;
  subject_array = storage.getItem(subject);
  if (subject_array) {
    // storage cant store arrays,
    // so we need to split the string thats already in storage
    subject_array = subject_array.split(",");
    subject_array.push(Math.floor(pts).toString());
    storage.setItem(subject, subject_array);
  } else {
    storage.setItem(subject, [pts]);
  }
  window.location.reload();
};

const get = (subject) => {
  storage = window.localStorage;
  subject_array = storage.getItem(subject);
  if (subject_array) {
    return subject_array.split(",");
  } else {
    storage.setItem(subject, [0]);
    return ["0"];
  }
};
