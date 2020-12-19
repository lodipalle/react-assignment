import axios from "axios";
import { fetchUser } from "./fetchUser";
import { configs } from "../configs/app";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

it("fetches data from api", async () => {
  mockedAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { results: ["cat.jpg"] }
    })
  );

  const response = await fetchUser();
  const result = response.data.results;

  expect(result).toEqual(["cat.jpg"]);
  expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  expect(mockedAxios.get).toHaveBeenCalledWith(`${configs.apiUrl}?page=1`);
});
