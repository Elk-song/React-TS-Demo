import { TEST_INFO } from "@/store/actionType";
export default function test(state: any = null, action: { type: string; data: any }) {
  switch (action.type) {
    case TEST_INFO:
      return {
        ...state,
        "testDemo": action.data
      }
    default:
      return state
  }
}