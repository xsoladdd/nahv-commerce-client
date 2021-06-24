export interface headerInterface {
  accessToken: string | undefined;
  logout: () => void;
}

export interface navbar {
  to: string;
  name: string;
  items?: navbar[];
}
