


def gen(aux):
    if (len(aux) == 9 ):
        print("{"),
        auxStr = [str(x) for x in aux]
        print(", ".join(auxStr)),
        print(", "),
        val = det(aux)
        if(val<0):
            val = 1
        print(val),
        print("}"),
        print(",")
    else:
        a = aux[:]
        b = aux[:]
        a.append(0)
        b.append(1)
        gen(a)
        gen(b)



def det(vec):
    return vec[0]*(vec[4]*vec[8]-vec[5]*vec[7]) - vec[1]*(vec[3]*vec[8]-vec[5]*vec[6]) + vec[2]*(vec[3]*vec[7]-vec[4]*vec[6])

aux = []
gen(aux)
