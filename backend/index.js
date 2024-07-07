import express from "express";
const app = express();
import cors from 'cors';
// app.use(cors());

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
        image: "https://imgs.search.brave.com/vcIl2AEGz5whfgGO6zA6CB6qayXFteuXwO6wfnonIpM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIzLzA2L2xhcHRv/cHN1bmRlcjUwMC0y/MDQ4cHgtYWNlcmFz/cGlyZTNzcGluMTQu/anBnP2F1dG89d2Vi/cCZxdWFsaXR5PTc1/JndpZHRoPTEwMjQ"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 699.99,
        image: "https://imgs.search.brave.com/JSCPiWSOH4vNE3EhQq7f3wLlObRFVXCb6Ys5a0UwdoU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzY1YmQ2/ODljZDA0YzNiNDgw/ZmM3YzRmNy9tYXN0/ZXIvd18xMjgwLGNf/bGltaXQvT25lUGx1/cyUyMDEyUiUyMFNP/VVJDRSUyMEp1bGlh/biUyMENob2trYXR0/dS5qcGc"
    },
    {
        id: 3,
        name: "Headphones",
        price: 199.99,
        image: "https://imgs.search.brave.com/fZTLNftqFLF8MoOgAVkSu3aJ_Z_V0i9FDS09CZSeCEs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/MjM5Nzc3NS9waG90/by9oZWFkcGhvbmVz/LW9uLXRoZS1waW5r/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVZYTG8zNnJQWnl2/VEI5WDYxMTFnVHBS/WklWX21EWEpTSzlG/OVZoZmF3WXM9"
    },
    {
        id: 4,
        name: "Smartwatch",
        price: 299.99,
        image: "https://imgs.search.brave.com/HS1_ll9ovnI20Mm5PdE49C18mLPmBVXfPZV14d6qdaU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg2/OTkzMjI4L3Bob3Rv/L3NtYXJ0LXdhdGNo/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1kVktBN1lTVGpu/aHpZQW9ZY3hEd0dF/dVYxOFFWLUstWXVa/Q0FCbmp0OHBFPQ"
    },
    {
        id: 5,
        name: "Tablet",
        price: 499.99,
        image: "https://imgs.search.brave.com/6-xiv22QKrLuYqJxAm1FgAzkI7TW-a62QZIHmFUKG9k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waXNj/ZXMuYmJ5c3RhdGlj/LmNvbS9pbWFnZTIv/QmVzdEJ1eV9VUy9H/YWxsZXJ5L1NPTC02/ODc5Mi1UYWJsZXRz/QnV5aW5nR3VpZGUt/QnJhbmRzLVNhbXN1/bmctMTc4NDk2Lmpw/Zw"
    },
    {
        id: 6,
        name: "Camera",
        price: 599.99,
        image: "https://imgs.search.brave.com/tDc5bKAuh5BXASZEPplcGZelB3t97lovIUrOkjg8HV0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzUyLzQ1LzMy/LzM2MF9GXzUyNDUz/MjkzX3FHQ1JGZGY2/bkVrQ0xqQnVSSUhR/SVFNT09hWW1nTnBO/LmpwZw"
    },
    {
        id: 7,
        name: "Gaming Console",
        price: 399.99,
        image: "https://imgs.search.brave.com/0IeZam1AJJK7tPaZYe7FKGjSBMMuvq7CfZd7GIaIOA0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy9naC1p/bmRleC1nYW1pbmdj/b25zb2xlcy0wNTIt/cHJpbnQtcHJldmll/dy0xNjU5NzA1MTQy/LmpwZz9jcm9wPTAu/NjY5eHc6MS4wMHho/OzAuMTY0eHcsMCZy/ZXNpemU9NjQwOio"
    },
    {
        id: 8,
        name: "Wireless Mouse",
        price: 49.99,
        image: "https://imgs.search.brave.com/wPbK4f_CfNtwyKJKWKlyu-tu2UYrDJ32MmIV26u6NaE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/MTc2MzkzL3Bob3Rv/L3dpcmVsZXNzLW1v/dXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1sbVdkdVJx/SFhZOXFtaTFxMU1r/TWVGMnRDbkxURU0x/c1lGd3hBREd6cWM4/PQ"
    },
    {
        id: 9,
        name: "Bluetooth Speaker",
        price: 99.99,
        image: "https://imgs.search.brave.com/GwNRXazGHC4br1FnhA7EUWQD7Bb4EmhUB-ddeasAV-0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dGhld2lyZWN1dHRl/ci5jb20vd3AtY29u/dGVudC9tZWRpYS8y/MDIzLzA0L2JsdWV0/b290aHNwZWFrZXJz/LTIwNDhweC00NzAw/LmpwZz9hdXRvPXdl/YnAmcXVhbGl0eT03/NSZ3aWR0aD0xMDI0"
    },
    {
        id: 10,
        name: "eBook Reader",
        price: 129.99,
        image: "https://imgs.search.brave.com/tkjuh7UA3fT1aDjwKCNlLngz1k8kagEhadc1TS_dRY4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDgw/MTMzMjg2L3Bob3Rv/L2Vib29rLXJlYWRl/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9d2doTjlIOTFC/NTBUMnF3OUR3M0tq/VTN4VGVJd1NOeTFP/MjZwTDV2RzNyMD0"
    },
    {
        id: 11,
        name: "Drone",
        price: 899.99,
        image: "https://imgs.search.brave.com/NtHJw6g3eFTZ3Vagqs7JjXb7lyjEZalla_D4piVMmA0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTU4MTE4NTM4Mjkt/N2Y3NDNhY2EzNzcw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OFpI/SnZibVVsTWpCallX/MWxjbUY4Wlc1OE1I/eDhNSHg4ZkRBPQ.jpeg"
    },
    {
        id: 12,
        name: "External Hard Drive",
        price: 79.99,
        image: "https://imgs.search.brave.com/lsbqaKRDbtHJHP_i0v8Sl0m9PGTRxgApL-D_hH2DnUM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg1/MTEyMTg0L3Bob3Rv/L2V4dGVybmFsLWhh/cmQtZHJpdmUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPThm/SVlXSmFSWG9scFpv/WXA3M3NGQ0ZWNmhn/SnBvR2trREZLc3Jl/M1ZNSE09"
    },
    {
        id: 13,
        name: "Keyboard",
        price: 69.99,
        image: "https://imgs.search.brave.com/mNL2DKbmXSDJQOVArevCR_whrtCd_ItGKiWmR9AeihU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg2/OTI0MDc2L3Bob3Rv/L2xhcHRvcC1rZXli/b2FyZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9bnZnc2R4/ZEVvd0hsNlhmdnlr/WDM0RkdvX1V4eVY4/Sy0tbWZqM3BJblh0/cz0"
    },
    {
        id: 14,
        name: "Monitor",
        price: 299.99,
        image: "https://imgs.search.brave.com/FjiKIhVLzcYes-zgUD0cSLu1Q7ANHR0iEV7ztPKxPTw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jMS5u/ZXdlZ2dpbWFnZXMu/Y29tL1Byb2R1Y3RJ/bWFnZS8xQjQtMDAx/RC0wMEtDOC1WMDYu/anBn"
    },
    {
        id: 15,
        name: "Router",
        price: 129.99,
        image: "https://imgs.search.brave.com/r9RBnaxCrhxPAoGMT58jznzWxiDPW7SptV8rOePWxM4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/ODM0MzY5Mi9waG90/by9yb3V0ZXItd2l0/aC13aS1maS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9YndB/X040TlRQR2VtOTls/c3NqOEFoa2hyak1w/dUNwa0k0TldhTzRD/RlB3dz0"
    },
    {
        id: 16,
        name: "Smart Thermostat",
        price: 249.99,
        image: "https://imgs.search.brave.com/bDDvm31Xmf5ZgMkTSdWa6O6ysIvnZt0iggXHaImKfX4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NTMyNTA0MC9waG90/by91c2luZy1zbWFy/dC10aGVybW9zdGF0/LXRvLWNoYW5nZS10/ZW1wcmV0dXJlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/QVNjd1JmSzlETW9m/SWhNWUJ1aWt2dTVG/NE9ROXEzdmxvZ05a/OUYxWG44PQ"
    },
    {
        id: 17,
        name: "Fitness Tracker",
        price: 149.99,
        image: "https://imgs.search.brave.com/P0IjcxIOx-L3PZsPJwzqWTaO7GjnNxn3jsvvFLcuR5Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNjk5/ODkyMzI4LTYxd24y/amZoQmtMLmpwZz9j/cm9wPTF4dzoxeGg7/Y2VudGVyLHRvcCZy/ZXNpemU9OTgwOio"
    },
    {
        id: 18,
        name: "Electric Scooter",
        price: 499.99,
        image: "https://imgs.search.brave.com/EzwHRMAhyONsL8TZRHWezbgwllLcPZ_y7pf59B5NXxs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nb3Ry/YXguY29tL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L2c0LWVsZWN0cmlj/LXNjb290ZXItMzk5/NDE2LmpwZz92PTE2/ODE3Njg2NjYmd2lk/dGg9MTUwMA"
    },
    {
        id: 19,
        name: "Smart Light Bulb",
        price: 29.99,
        image: "https://imgs.search.brave.com/hzl0LNSdL--m1efrA-nHiMn8oqidVRPy7hvjUTiWhmo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFyYnhwd2lleEwu/anBn"
    },
    {
        id: 20,
        name: "Action Camera",
        price: 299.99,
        image: "https://imgs.search.brave.com/oRCbBYLIyn8opc-lxIZkNsa2Xg7_cORU9px_AdJ5_n8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS53aXJlZC5jb20v/cGhvdG9zLzVkMDkz/MWI4Yjg4NzI2ODEx/OGY2NTViOS9tYXN0/ZXIvd18zMjAsY19s/aW1pdC9HZWFyLU9s/eW1wdXMtVEctNi1T/T1VSQ0UtT2x5bXB1/cy5qcGc"
    },
    {
        id: 21,
        name: "VR Headset",
        price: 399.99,
        image: "https://imgs.search.brave.com/uZIEDhItm8BdJTbzhmDtU6vNMwoOZoeEN0qfBe8FNSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/NTk1NTA1MzIzMDIt/YmExMzgzMmVkY2Rm/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4T0h4OGRt/bHlkSFZoYkNVeU1I/SmxZV3hwZEhrbE1q/Qm9aV0ZrYzJWMGZH/VnVmREI4ZkRCOGZI/d3c.jpeg"
    },
    {
        id: 22,
        name: "3D Printer",
        price: 799.99,
        image: "https://imgs.search.brave.com/v7YqXLrevsDC7GPzPtT4gL0y1j1eDw3VliwfkaohdKo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTIyOTEyMC9waG90/by8zZC1wcmludGVy/LXByaW50aW5nLXBy/b3RvdHlwZXMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZ1/eEJDcWZWZm5xRjRR/NWZrc1ZzZWkwZzdw/NjhzS2kycTRaeXN6/d0VIVWs9"
    },
    {
        id: 23,
        name: "Digital Photo Frame",
        price: 89.99,
        image: "https://imgs.search.brave.com/lowqAbjPTy2iw5UP-YFsEgQz_MYJ4Pq1rl5f3W0Fras/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9waG90/b3NwcmluZy5jb20v/Y2RuL3Nob3AvY29s/bGVjdGlvbnMvUFMt/RmFtaWx5XzItdGFs/bF8xNDAweDEyNzhf/MTA2ZjQ0OWQtNGI0/Zi00M2MzLTg0Mzct/ZDRhMGFkZGFlN2Y4/LmpwZz92PTE2MTk2/MzMyOTYmd2lkdGg9/MTgwMA"
    },
    {
        id: 24,
        name: "Smart Doorbell",
        price: 199.99,
        image: "https://imgs.search.brave.com/xyClq1VApG3jFWmfKYq4KfLB8RpkIjs5FS5x0n0DCdk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1g1/eFdpeDVBc01LTWpB/d2NpVlgzSjctMzIw/LTgwLmpwZw"
    },
    {
        id: 25,
        name: "Portable Projector",
        price: 399.99,
        image: "https://imgs.search.brave.com/KiEpAER4Z5yHqA8LNyTf-8HUA5sTVu9Uh7C6bjqG-mY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnJ0/aW5ncy5jb20vYXNz/ZXRzL3BhZ2VzL3Ba/Q285Ym1PL2Jlc3Qt/cG9ydGFibGUtcHJv/amVjdG9ycy0yMDI0/MDIwNS1tZWRpdW0u/anBnP2Zvcm1hdD1h/dXRv"
    }
];


app.get("/api/products", cors(), (req, res) => {
    if(req.query.search){
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search));
        res.send(filteredProducts.length ? filteredProducts : "No product available!");
        return;
    }
  setTimeout(() => {
      res.send(products);
  }, 3000);
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})