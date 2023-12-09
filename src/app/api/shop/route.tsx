export async function GET() {

    const data = [
        {
            id: '0',
            name:'Epazote',
            isGrabbed: true
        },
        {
            id: '1',
            name:'Tomates',
            isGrabbed: false
        },
        {
            id: '2',
            name:'Totopos',
            isGrabbed: true
        },
        {
            id: '3',
            name:'Bolillo',
            isGrabbed: false
        },
        {
            id: '4',
            name:'Yogurt',
            isGrabbed: true
        }
    ];
   
    return Response.json({ data })
  }