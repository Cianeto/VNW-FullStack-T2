# Missão 1

nota = float(input("Digite a nota do aluno de 0 a 10: "))
if nota >= 6:
    print("Aluno aprovado.")
elif nota <= 5:
    print("Aluno reprovado.")
else:
    print("Não pode nota entre 5 e 6.")

# Missão 2

idade = int(input("Quantos anos o aluno tem: "))
if idade >= 16:
    print("Aluno pode votar.")
else:
    print("Aluno não pode votar.")

# Missão 3

nota = int(input("Digite a nota do aluno: "))
if nota < 60:
    print("Estude um pouco mais, você tirou F.")
elif 60 <= nota <= 69:
    print("Fique atento, você tirou D.")
elif 70 <= nota <= 79:
    print("Bom trabalho, você tirou C.")
elif 80 <= nota <= 89:
    print("Muito bem, você tirou B.")
elif 90 <= nota <= 100:
    print("Parabéns, você tirou A!")
else:
    print("Nota indefinida!")

# Missão 4

num1 = input("Digite o primeiro número: ")
num1 = float(num1.replace(',', '.'))
num2 = input("Digite o segundo número: ")
num2 = float(num2.replace(',', '.'))
r = str(num1 + num2).replace('.', ',')
print("A soma dos dois números digitados é ", r)

# Missão 5

key = "Python123"
while True:
    senha = input("Digite a senha (ou 0 para sair): ")
    if senha == "0":
        print("Saindo...")
        break
    elif senha == key:
        print("Senha correta!")
        break
    else:
        print("Senha incorreta! Tente novamente.")

# Missão 6

num = 1
print("CONTAGEM: ")
while num < 11:
    print(num)
    num += 1

# Missão 7

arr = [8, 3, 10, 1, 5]
arr.sort()
print("Lista ordenada: ", arr)

# Missão 8

alunos_registrados = ("Ana", "Bruno", "Carla", "Daniel", "Eduardo")
primeiro_nome = str(alunos_registrados[0])
ultimo_nome = str(alunos_registrados[-1])
print("Primeiro nome: ", primeiro_nome, "\nÚltimo nome: ", ultimo_nome)

# Missão 9

numero = int(input("Digite um número: "))

def dobro(numero):
    return numero*2

resultado = dobro(numero)
print("Dobro do número digitado: ", resultado)

# Missão 10

nome = input("Digite um nome: ")

def contador_de_letras(nome):
    return len(nome)

q = contador_de_letras(nome)

print("O nome ", nome, " tem ", q, " letras.")
