 class Meta {
    constructor(image_array, amount_of_image) {
        this.image_array = image_array;
        this.amount_of_image = amount_of_image;
        this.particle_array = [];
        this.array_length;

        this.initialize();
    }
    initialize() {
        this.truncate_image();
        this.create_image_object();
    }
    truncate_image() {
        let num_of_points = Math.floor(this.amount_of_image * this.image_array.length);
        let num_of_removed = this.image_array.length - num_of_points;
        let counter = 0;
        let temp_index = 0;
        this.array_length = num_of_points;

        while (counter < num_of_removed) {
            temp_index = Math.floor(random(0, this.image_array.length));
            this.image_array.splice(temp_index, 1);
            counter += 1;
        }
    }
    create_image_object() {
        let temp_x = [];
        let temp_y = [];
        let x;
        let y;

        // Scale original points first from image
        for (let i = 0; i < this.array_length; i++) {
            temp_x[i] = this.image_array[i][0];
            temp_y[i] = this.image_array[i][1];
        }
        let w = max(temp_x) - min(temp_x);
        let h = max(temp_y) - min(temp_y);

        // Create array of particle objects
        for (let i = 0; i < this.array_length; i++) {
            x = this.image_array[i][0] * (W/w);
            y = this.image_array[i][1] * (H/h);
            this.image_array[i][0] = x;
            this.image_array[i][1] = y;
            this.particle_array[i] = new Particle(x, y);
        }
    }
    free_fall() {
        for (let j = 0; j < this.array_length; j++) {
            if (this.particle_array[j].y >= (H-r)) {
                this.particle_array[j].flagOn();
            } else if ((this.particle_array[j].y <= r) || (this.particle_array[j].t<0)) {
                this.particle_array[j].flagOff();
            }
            if (this.particle_array[j].flag == 0) {
                this.particle_array[j].down();
            }
            if (this.particle_array[j].flag == 1) {
                this.particle_array[j].up();
            }
        }
    }
    restore() {
        for (let s = 0; s < this.array_length; s++) {
            if (dist(this.particle_array[s].x, this.particle_array[s].y, this.image_array[s][0], this.image_array[s][1]) > thresh) {
                this.particle_array[s].restore(deck[flag][s][0], deck[flag][s][1]);
            }
        }
    }
    show() {
        for (let i = 0; i < this.array_length; i++) {
            this.particle_array[i].show();
        }
    }
}