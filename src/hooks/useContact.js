import useClient from "./useClient";
import urls from "../api/urls";

const useContact = () => {
  const { post, isLoading } = useClient();
  const sendMessages = async (fdata) => {
    const { data, error } = await post(urls.messages.baseUrl, fdata);
    if (error) return alert(error?.message);
    alert(data.message);
  };

  const sendReservation = async (fdata) => {
    const { data, error } = await post(urls.reservations.baseUrl, fdata);
    if (error) return alert(error?.message);
    alert(data.message);
  };

  return { sendMessages, sendReservation, isLoading };
};

export default useContact;
