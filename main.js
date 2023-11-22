const text = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quaerat libero cupiditate ducimus ad adipisci non? Expedita voluptatum accusamus, voluptates error dicta numquam eligendi molestias repellendus non aut deleniti, rerum recusandae explicabo suscipit, asperiores et possimus impedit natus nam quas quam. In qui fugiat sapiente cumque, rerum quos consectetur, saepe, corrupti odio ipsam eius distinctio iure sequi praesentium! Minima ad quia pariatur et, eveniet doloribus accusamus saepe eum. Autem ducimus odio vel quidem suscipit cupiditate laborum nostrum reiciendis est. Atque.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolor sunt ea in repudiandae, aperiam blanditiis rem saepe earum dolorum doloremque id, beatae eius esse animi minus porro sint, ipsa cum suscipit pariatur cupiditate error! Quas ratione ex aperiam similique necessitatibus? Suscipit eius vitae minus maiores nisi corrupti impedit soluta officiis voluptatem. Aliquam placeat animi, repellat maxime quasi vero perferendis numquam nostrum? Pariatur sit beatae itaque, eum corrupti tempore exercitationem optio distinctio accusantium, iste libero est nihil magnam error enim.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis architecto quod voluptates laborum iure, iste dicta amet placeat magni blanditiis neque, nulla nemo. Molestias suscipit dicta, deserunt, voluptatum deleniti accusantium saepe delectus ad explicabo asperiores totam repudiandae aliquid incidunt repellat quas labore. Iste assumenda tempora illo corporis deleniti dignissimos qui omnis optio nemo, earum, ratione magni architecto non et iusto commodi ad! Corrupti amet fugit tempora perspiciatis veritatis ipsam sit voluptatem modi maxime, deserunt optio consequuntur, soluta alias cum nesciunt.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum tempora maxime cumque repudiandae voluptatem, ad necessitatibus inventore corrupti quod nemo quia nihil optio id quidem porro! Non unde corrupti eius nesciunt quas quo ducimus placeat itaque blanditiis aperiam quibusdam rerum harum voluptas, quae minus autem accusamus nobis. Consequuntur laborum cum, ad ullam reiciendis optio molestiae enim magnam eius aperiam modi nostrum obcaecati debitis corporis eum quas labore doloribus, earum doloremque excepturi eveniet. Rerum similique facere incidunt exercitationem nesciunt enim quae?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum delectus, nesciunt asperiores, distinctio doloribus excepturi magni at voluptatum voluptate sapiente eaque optio sunt recusandae ipsam! Vitae magni commodi asperiores incidunt, ea harum nulla, corporis, nesciunt nobis odit reiciendis mollitia dolores. Natus soluta possimus accusamus maxime voluptatem optio officiis vero eveniet recusandae fuga voluptas facilis, magnam expedita atque adipisci aliquam eum debitis. Totam praesentium quis eius amet exercitationem eum id veritatis quae laudantium, magnam iure temporibus!`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut deserunt magnam magni facere neque suscipit eligendi? Tempora voluptates ex id exercitationem vel officia quisquam adipisci porro eos molestiae veritatis nisi quo numquam est eveniet pariatur quaerat, voluptatibus, cumque reprehenderit laboriosam labore error, voluptatum possimus quod. Ipsam, nostrum! At quis ad beatae vero, iste harum cumque veritatis nemo eveniet soluta voluptatum sequi, possimus iure libero corrupti, mollitia dignissimos laborum. Cupiditate vel similique tempore cumque, sunt iste eum asperiores laudantium doloribus repellat ad adipisci nesciunt.`,
    `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus consequuntur nisi, fugit a adipisci impedit atque est soluta ea deleniti voluptatum rerum rem velit quos eius voluptas similique quod blanditiis dolores assumenda molestiae? Nisi autem modi illum hic impedit pariatur doloribus nulla voluptatibus aspernatur soluta, commodi tempore voluptatem quia ducimus officia ea sed voluptatum dolor blanditiis. Eaque debitis, amet quas aut harum esse fuga quibusdam facilis unde blanditiis asperiores non ipsum facere exercitationem dolor nesciunt?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, fuga, id est vero rem facere blanditiis laudantium, laboriosam veniam quos recusandae. Ad numquam, deleniti dolor sequi quasi quam blanditiis nihil maxime eaque, officiis nobis suscipit tempore aliquam, at quaerat aperiam corrupti optio quod laborum laudantium amet accusamus placeat voluptatibus molestias. Unde dolores animi voluptas iure doloribus ab voluptates nihil eligendi tempore quae, velit quisquam sunt natus rerum optio dolorum amet similique. Amet.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, dignissimos. Impedit culpa reiciendis iusto beatae officia aliquam eius aspernatur, quos sed magni nihil soluta maiores doloribus totam incidunt quo molestiae vel, rerum delectus. Est in quidem, id iure deserunt voluptates amet, esse fuga quo, eos similique repudiandae eaque consectetur. Obcaecati, in neque minus, soluta reprehenderit ad quasi quae aspernatur quisquam atque inventore optio laborum porro.`
];

const form = document.querySelector(".main_form");
const number = document.getElementById("amount");
const article = document.querySelector(".lorem_text");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = parseInt(number.value);
    const random = Math.floor(Math.random() * text.length);
    
    if (isNaN(value) || value <= 0 || value > 9) {
        article.innerHTML = `<p class="para"> ${text[random]}</p>`
    } else {
        const sliceText = text.slice(0, value);
        const tempText = sliceText.map(para => {
            return `<p class="para"> ${para}</p>`
        });
        const getTempText = tempText.join("");
        article.innerHTML = getTempText;
    }
})