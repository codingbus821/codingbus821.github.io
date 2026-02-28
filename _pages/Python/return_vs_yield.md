---
title: "return과 yield 차이"
tags:
    - Python
date: "2026-02-01"
thumbnail: "/assets/img/thumbnail/python.png"
bookmark: true
---
# Summary

파이썬의 메소드와 함수를 다루다 보면 값을 반환하기 위해 `return` 이 많이 쓰이지만 `yield`로 반환하는 경우도 있습니다. 더 자세히 다루려면 `이터레이터`와 `제너레이터`에 대해서도 알아야 하지만 여기서는 return과 yield가 어떻게 다른지만 작성하도록 하겠습니다.

# 1. return

return은 함수에서 값을 반환하고 함수의 실행을 종료합니다 (return에 값을 지정하지 않으면 None 반환).

## 예제:

```python
def add(a, b):
  return a + b

total = add(8, 2)
print(total)
```

## 출력:

```python
10
```

`add`함수는 두 개의 인자를 받아서 더한 뒤 `return`으로 결과를 반환합니다.

# 2. yield

yield는 함수에서 값을 반환한 뒤 바깥의 코드가 실행되도록 양보한다.

## 예제:

```python
def char_generator():
  yield 'a'
  yield 'b'
  yield 'c'

def main():
  gen = char_generator()

  for i in gen:
    print(i)
    print(f"after {i}")

if __name__ == "__main__":
  main()
```

## 출력:

```python
a
after a
b
after b
c
after c
```

`main`에서 gen이라는 변수에 `제너레이터`를 할당해 주고 for 문으로 실행 시 i에 순차적으로 a, b, c가 반환되고 바깥 코드인 `print(f"after {i}")`을 실행합니다.

# 3. 차이점

앞서 작성한 함수(`add`, `char_generator`)의 반환값을 받는 `add`와 `gen`의 type을 확인해 보면

```python
print(type(total))
---
<class 'int'>
```

```python
print(type(gen))
---
<class 'generator'>
```

`gen`은 `generator`인 것을 확인할 수 있습니다.