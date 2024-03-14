def verifica_sequencia_fibonacci(num):
    fib = [0, 1]

    while fib[-1] < num:
        fib.append(fib[-1] + fib[-2])

    if num in fib:
        return True
    else:
        return False

numero_informado = int(input("Informe um número inteiro: "))

if verifica_sequencia_fibonacci(numero_informado):
    print(f"O numero informado {numero_informado} pertence a sequência Fibonacci.")
else:
    print(f"O numero informado {numero_informado} não pertence a sequência Fibonacci.")

