interface AnswerInterface {
  data: any;
  error: boolean;
}

function useFetchData(apiFunctions: ((requestData: any) => Promise<Response>)[], apiFunctionRequestDatas: any[]): () => Promise<AnswerInterface[]> {
  return async function fetchFunction() {
    const answers: AnswerInterface[] = await Promise.all(
      apiFunctions.map(async (currentApiFunction, currentApiFunctionIndex) => {
        const response = await currentApiFunction(apiFunctionRequestDatas[currentApiFunctionIndex]);
        if (response.ok) {
          let resolved = await response.json();
          let ret: AnswerInterface = { data: resolved, error: false };
          return ret;
        } else {
          let resolved = await response.json();
          let ret: AnswerInterface = { data: resolved, error: true };
          return ret;
        }
      })
    );

    return answers;
  };
}

export default useFetchData;
