n= int(input()) #입력 값 받기
i = 2 #1은 무조건 나누어지기 때문에 2부터 +1하면서 순회
while n != 1: # 입력값이 1이면 끝
    if n % i == 0: # 나누어지면 입력값을 나누어진 값으로 초기화
        n //= i
        print(i) #나누어 진 값이 소인수 이므로 출력
    else: # 나누어 지지 않는다면 i를 1씩 증가
        i += 1
