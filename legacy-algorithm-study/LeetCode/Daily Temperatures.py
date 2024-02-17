class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        answer = [0] * len(T)
        stack = []
        for i , cur in enumerate(T):
            while stack and cur > T[stack[-1]]:
              # 현재 온도가 스택 값보다 높다면 정답 처리
                last = stack.pop()
                answer[last] = i - last
            stack.append(i)
        return answer
        